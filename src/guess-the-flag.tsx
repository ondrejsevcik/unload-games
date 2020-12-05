import React, { useReducer } from "react";
import {
  getFlags,
  getFlagImgPath,
  Flag,
  Continent,
  continentOptions
} from "./utils/flags";
import { getPlayers } from "./utils/players";
import { classNames } from "./utils/class-names";
import { UButton } from "./components/u-button";
import "./guess-the-flag.css";

export default function GuessTheFlag() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function GameBoardScreen(state: QuestionState | AnswerState) {
    let currentPlayerIndex = state.answeredQuestions % state.players.length;
    let totalFlags = state.answeredQuestions + state.remainingFlags.length;
    let percentComplete = (100 / totalFlags) * state.answeredQuestions;

    return (
      <div>
        <div className="progress-bar">
          <div
            className="progress-bar__bar"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
        <div className="flex justify-center">
          {state.players.map((player, index) => (
            <div
              key={player.name}
              className={classNames("inline", "p-1", "m-1", "rounded", {
                "game-board-player__active": index === currentPlayerIndex
              })}
            >
              <span className="mr-1">{player.name}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ResultView(state: ResultState) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-center">It's over!!</h1>
        <h3>The results</h3>
        {state.playerResults
          .sort((pA, pB) => pA.score - pB.score)
          .map(player => (
            <div>
              {player.name} - {player.score}
            </div>
          ))}
        <button className="button" onClick={() => dispatch(goToSetup())}>
          New game
        </button>
      </div>
    );
  }

  function SetupView(state: SetupState) {
    return (
      <div className="max-w-sm">
        <h1 className="text-center text-3xl mt-3">Guess the Flag</h1>
        <h2 className="text-center mt-3">How many players?</h2>
        <div className="flex justify-center my-2">
          {[2, 3, 4, 5].map(n => (
            <span
              className={classNames("m-1", {
                "opacity-50": state.numberOfPlayers !== n
              })}
            >
              <UButton
                key={n}
                onClick={() =>
                  dispatch(updateSetup(n, state.selectedContinent))
                }
                label={n.toString()}
              />
            </span>
          ))}
        </div>
        <h2 className="text-center mt-3 mb-2">What continents?</h2>
        <div className="flex justify-center flex-wrap">
          {continentOptions.map(continentOption => (
            <span
              key={continentOption.label}
              className={classNames("m-1", {
                "opacity-50": state.selectedContinent !== continentOption.value
              })}
            >
              <UButton
                onClick={() =>
                  dispatch(
                    updateSetup(state.numberOfPlayers, continentOption.value)
                  )
                }
                label={continentOption.label}
              />
            </span>
          ))}
        </div>
        <div className="text-center mt-6">
          <UButton
            onClick={() =>
              dispatch(
                startGame(state.numberOfPlayers, state.selectedContinent)
              )
            }
            label="Start game"
          />
        </div>
      </div>
    );
  }

  function QuestionView(state: QuestionState) {
    // TODO this might throw
    let flag = state.remainingFlags[0];

    return (
      <div className="flex-grow">
        {GameBoardScreen(state)}
        <h1 className="text-center mt-3">Guess the flag</h1>
        <img className="game-board-img" src={getFlagImgPath(flag)} alt="Flag" />
        <div className="text-center text-2xl mt-2 mb-2 invisible">
          {flag.countryName}
        </div>
        <div className="text-center">
          <button className="button" onClick={() => dispatch(revealAnswer())}>
            Show me
          </button>
        </div>
      </div>
    );
  }

  function AnswerView(state: AnswerState) {
    // TODO this might throw;
    let flag = state.remainingFlags[0];

    return (
      <div className="flex-grow">
        {GameBoardScreen(state)}
        <h1 className="text-center mt-3">Guess the flag</h1>
        <img className="game-board-img" src={getFlagImgPath(flag)} alt="Flag" />
        <div className="text-center text-2xl mt-2 mb-2">{flag.countryName}</div>
        <div className="text-center">
          <button
            className="button mr-1"
            onClick={() => dispatch(markAsCorrectAnswer())}
          >
            <span role="img" aria-label="Correct">
              👍
            </span>
          </button>
          <button
            className="button"
            onClick={() => dispatch(markAsWrongAnswer())}
          >
            <span role="img" aria-label="Wrong">
              👎
            </span>
          </button>
        </div>
      </div>
    );
  }

  let view: JSX.Element = <div />;
  switch (state.kind) {
    case "setup":
      view = SetupView(state);
      break;
    case "question":
      view = QuestionView(state);
      break;
    case "answer":
      view = AnswerView(state);
      break;
    case "result":
      view = ResultView(state);
      break;
    default:
      assertNever(state);
      break;
  }

  return <div className="justify-center flex">{view}</div>;
}

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

interface Player {
  name: string;
  score: number;
}

// States
export const initialState: SetupState = {
  kind: "setup",
  selectedContinent: null,
  numberOfPlayers: 2
};

interface SetupState {
  kind: "setup";
  selectedContinent: Continent | null;
  numberOfPlayers: number;
}

interface QuestionState {
  kind: "question";
  players: Player[];
  answeredQuestions: number;
  remainingFlags: Flag[];
}

interface AnswerState {
  kind: "answer";
  players: Player[];
  answeredQuestions: number;
  remainingFlags: Flag[];
}

interface ResultState {
  kind: "result";
  playerResults: Player[];
}

type State = SetupState | QuestionState | AnswerState | ResultState;

// Actions
interface RevealAnswerAction {
  type: "REVEAL_ANSWER";
}
interface UpdateSetupAction {
  type: "UPDATE_SETUP";
  payload: {
    numberOfPlayers: number;
    selectedContinent: Continent | null;
  };
}
interface StartGameAction {
  type: "START_GAME";
  payload: {
    numberOfPlayers: number;
    selectedContinent: Continent | null;
  };
}
interface RevealAnswerAction {
  type: "REVEAL_ANSWER";
}
interface MarkAsCorrectAnswer {
  type: "MARK_AS_CORRECT";
}
interface MarkAsWrongAnswer {
  type: "MARK_AS_WRONG";
}
interface GoToSetupAction {
  type: "GO_TO_SETUP";
}

let updateSetup = (
  numberOfPlayers: number,
  selectedContinent: Continent | null
): UpdateSetupAction => ({
  type: "UPDATE_SETUP",
  payload: {
    numberOfPlayers,
    selectedContinent
  }
});

let startGame = (
  numberOfPlayers: number,
  selectedContinent: Continent | null
): StartGameAction => ({
  type: "START_GAME",
  payload: {
    numberOfPlayers,
    selectedContinent
  }
});

let revealAnswer = (): RevealAnswerAction => ({ type: "REVEAL_ANSWER" });

let markAsCorrectAnswer = (): MarkAsCorrectAnswer => ({
  type: "MARK_AS_CORRECT"
});

let markAsWrongAnswer = (): MarkAsWrongAnswer => ({ type: "MARK_AS_WRONG" });

let goToSetup = (): GoToSetupAction => ({ type: "GO_TO_SETUP" });

type Actions =
  | UpdateSetupAction
  | StartGameAction
  | RevealAnswerAction
  | MarkAsCorrectAnswer
  | MarkAsWrongAnswer
  | GoToSetupAction;

// Reducer
export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "UPDATE_SETUP":
      let {
        numberOfPlayers: numOfPlayers,
        selectedContinent: selContinent
      } = action.payload;

      return {
        kind: "setup",
        numberOfPlayers: numOfPlayers,
        selectedContinent: selContinent
      };

    case "START_GAME":
      let { numberOfPlayers, selectedContinent } = action.payload;
      let players = getPlayers(numberOfPlayers);

      return {
        kind: "question",
        players,
        answeredQuestions: 0,
        remainingFlags: getFlags(selectedContinent)
      };

    case "REVEAL_ANSWER":
      if (state.kind !== "question") {
        return state;
      }

      return {
        kind: "answer",
        players: state.players,
        answeredQuestions: state.answeredQuestions,
        remainingFlags: state.remainingFlags
      };

    case "MARK_AS_CORRECT":
      if (state.kind !== "answer") {
        return state;
      }

      let currentPlayerIndex = state.answeredQuestions % state.players.length;
      let remainingFlags = [...state.remainingFlags.slice(1)];

      if (remainingFlags.length === 0) {
        // TODO they can have a same amount of points
        return {
          kind: "result",
          playerResults: state.players
        };
      }

      return {
        kind: "question",
        players: state.players.map((player, index) => {
          if (index === currentPlayerIndex) {
            return {
              ...player,
              score: player.score + 1
            };
          }
          return player;
        }),
        answeredQuestions: state.answeredQuestions + 1,
        remainingFlags
      };

    case "MARK_AS_WRONG":
      if (state.kind !== "answer") {
        return state;
      }

      let remainingFlags2 = [...state.remainingFlags.slice(1)];

      if (remainingFlags2.length === 0) {
        // TODO they can have a same amount of points
        return {
          kind: "result",
          playerResults: state.players
        };
      }

      return {
        kind: "question",
        players: state.players,
        answeredQuestions: state.answeredQuestions + 1,
        remainingFlags: remainingFlags2
      };

    case "GO_TO_SETUP":
      return initialState;

    default:
      assertNever(action);
  }
}
