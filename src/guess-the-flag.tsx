import React, { useReducer } from "react";
import { getFlags, Flag } from "./utils/flags";
import { getPlayers } from "./utils/players";
import { classNames } from "./utils/class-names";
import "./guess-the-flag.css";

export default function GuessTheFlag() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function GameBoardScreen(state: QuestionState | AnswerState) {
    let currentPlayerIndex = state.answeredQuestions % state.players.length;
    let totalFlags = state.answeredQuestions + state.remainingFlags.length;
    let percentComplete = (100 / totalFlags) * state.remainingFlags.length;

    return (
      <div>
        <div className="game-board-players">
          {state.players.map((player, index) => (
            <div
              key={player.name}
              className={classNames({
                "game-board-player": true,
                "game-board-player__active": index === currentPlayerIndex
              })}
            >
              <span>{player.name}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <span className="progress-bar__status">
            {state.answeredQuestions} / {totalFlags}
          </span>
          <div
            className="progress-bar__bar"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>
    );
  }

  function ResultView(state: ResultState) {
    return (
      <div>
        <h1 className="h1">It's over!!</h1>
        <h3>The winner is {state.winnerName}</h3>
        <button className="button" onClick={() => dispatch(goToSetup())}>
          New game
        </button>
      </div>
    );
  }

  function SetupView() {
    return (
      <div>
        <h1 className="welcome-heading">
          Guess the Flag <br />
          <small className="welcome-heading__subheader">with Friends</small>
        </h1>
        <h1 className="h1">How many players?</h1>
        {[2, 3, 4, 5].map(n => (
          <button
            key={n}
            className="button"
            onClick={() => dispatch(startGame(n))}
          >
            {n}
          </button>
        ))}
      </div>
    );
  }

  function QuestionView(state: QuestionState) {
    // TODO this might throw
    let flag = state.remainingFlags[0];

    return (
      <div>
        {GameBoardScreen(state)}
        <h1 className="h1">Guess the flag</h1>
        <img className="game-board-img" src={flag.imgUrl} alt="Flag" />
        <button className="button" onClick={() => dispatch(revealAnswer())}>
          Show me
        </button>
      </div>
    );
  }

  function AnswerView(state: AnswerState) {
    // TODO this might throw;
    let flag = state.remainingFlags[0];

    return (
      <div>
        {GameBoardScreen(state)}
        <h1 className="h1">Guess the flag</h1>
        <img className="game-board-img" src={flag.imgUrl} alt="Flag" />
        <h1>{flag.countryName}</h1>
        <button
          className="button"
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
    );
  }

  switch (state.kind) {
    case "setup":
      return SetupView();
    case "question":
      return QuestionView(state);
    case "answer":
      return AnswerView(state);
    case "result":
      return ResultView(state);
    default:
      assertNever(state);
  }
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
  kind: "setup"
};

interface SetupState {
  kind: "setup";
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
  winnerName: string;
}

type State = SetupState | QuestionState | AnswerState | ResultState;

// Actions
interface RevealAnswerAction {
  type: "REVEAL_ANSWER";
}
interface StartGameAction {
  type: "START_GAME";
  payload: { numberOfPlayers: number };
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

let startGame = (numberOfPlayers: number): StartGameAction => ({
  type: "START_GAME",
  payload: { numberOfPlayers }
});
let revealAnswer = (): RevealAnswerAction => ({ type: "REVEAL_ANSWER" });
let markAsCorrectAnswer = (): MarkAsCorrectAnswer => ({
  type: "MARK_AS_CORRECT"
});
let markAsWrongAnswer = (): MarkAsWrongAnswer => ({ type: "MARK_AS_WRONG" });
let goToSetup = (): GoToSetupAction => ({ type: "GO_TO_SETUP" });

type Actions =
  | StartGameAction
  | RevealAnswerAction
  | MarkAsCorrectAnswer
  | MarkAsWrongAnswer
  | GoToSetupAction;

// Reducer
export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "START_GAME":
      let { numberOfPlayers } = action.payload;
      let players = getPlayers(numberOfPlayers);

      return {
        kind: "question",
        players,
        answeredQuestions: 0,
        remainingFlags: getFlags(10)
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
          winnerName: state.players.sort((p1, p2) => p1.score - p2.score)[0]
            .name
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
          winnerName: state.players.sort((p1, p2) => p1.score - p2.score)[0]
            .name
        };
      }

      return {
        kind: "question",
        players: state.players,
        answeredQuestions: state.answeredQuestions + 1,
        remainingFlags: remainingFlags2
      };

    case "GO_TO_SETUP":
      return {
        kind: "setup"
      };

    default:
      assertNever(action);
  }
}
