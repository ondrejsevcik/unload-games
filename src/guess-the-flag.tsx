import React, { useState } from "react";
import {
  getFlags,
  getFlagImgPath,
  Flag,
  Continent,
  continentOptions,
} from "./utils/flags";
import { getPlayers } from "./utils/players";
import { classNames } from "./utils/class-names";
import { UButton } from "./components/u-button";
import "./guess-the-flag.css";

interface Player {
  name: string;
  score: number;
}

export default function GuessTheFlag() {
  const [continent, setContinent] = useState<Continent>("europe");
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [results, setResults] = useState<Player[] | null>(null);

  function updateSetup(numberOfPlayers, selectedContinent) {
    setContinent(selectedContinent);
    setNumberOfPlayers(numberOfPlayers);
  }

  function startGame() {
    setIsGameInProgress(true);
  }

  function startNewGame() {
    setContinent("europe");
    setNumberOfPlayers(2);
    setResults(null);
    setIsGameInProgress(false);
  }

  function showResults(results: Player[]) {
    setResults(results);
  }

  return (
    <div className="justify-center flex">
      {!results && !isGameInProgress && (
        <SetupView
          numberOfPlayers={numberOfPlayers}
          continent={continent}
          onSetupUpdate={updateSetup}
          onStartGame={startGame}
        />
      )}

      {isGameInProgress && (
        <GameBoard
          continent={continent}
          numberOfPlayers={numberOfPlayers}
          onGameFinished={showResults}
        />
      )}

      {results && <Results results={results} onStartNewGame={startNewGame} />}
    </div>
  );
}

function SetupView({ numberOfPlayers, continent, onSetupUpdate, onStartGame }) {
  return (
    <div className="max-w-sm">
      <h1 className="text-center text-3xl mt-3">Guess the Flag</h1>
      <h2 className="text-center mt-3">How many players?</h2>
      <div className="flex justify-center my-2">
        {[2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={classNames("m-1", {
              "opacity-50": numberOfPlayers !== n,
            })}
          >
            <UButton
              onClick={() => onSetupUpdate(n, continent)}
              label={n.toString()}
            />
          </span>
        ))}
      </div>
      <h2 className="text-center mt-3 mb-2">What continent?</h2>
      <div className="flex justify-center flex-wrap">
        {continentOptions.map((continentOption) => (
          <span
            key={continentOption.label}
            className={classNames("m-1", {
              "opacity-50": continent !== continentOption.value,
            })}
          >
            <UButton
              onClick={() =>
                onSetupUpdate(numberOfPlayers, continentOption.value)
              }
              label={continentOption.label}
            />
          </span>
        ))}
      </div>
      <div className="text-center mt-6">
        <UButton onClick={() => onStartGame()} label="Start game" />
      </div>
    </div>
  );
}

function GameBoard({
  numberOfPlayers,
  continent,
  onGameFinished,
}: {
  numberOfPlayers: number;
  continent: Continent;
  onGameFinished: (results: Player[]) => void;
}) {
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [players, setPlayers] = useState<Player[]>(getPlayers(numberOfPlayers));
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [remainingFlags, setRemainingFlags] = useState<Flag[]>(() =>
    getFlags(continent)
  );

  console.assert(
    numberOfPlayers > 0,
    "numberOfPlayers has to be higher than zero"
  );

  let currentPlayer = players[answeredQuestions % numberOfPlayers];
  let totalFlags = answeredQuestions + remainingFlags.length;
  let percentComplete = (100 / totalFlags) * answeredQuestions;
  let flag = remainingFlags[0];

  const revealAnswer = () => setIsAnswerVisible(true);

  const moveToNextQuestion = () => {
    setIsAnswerVisible(false);
    setRemainingFlags([...remainingFlags.slice(1)]);
    setAnsweredQuestions(answeredQuestions + 1);

    if (remainingFlags.length <= 1) {
      // This was the last question
      onGameFinished(players);
    }
  };

  const markAsCorrectAnswer = () => {
    setPlayers(
      players.map((player) =>
        player === currentPlayer
          ? {
              ...player,
              score: player.score + 1,
            }
          : player
      )
    );

    moveToNextQuestion();
  };

  return (
    <div className="flex-grow">
      <div>
        <div className="progress-bar">
          <div
            className="progress-bar__bar"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
        <div className="flex justify-center">
          {players.map((player) => (
            <div
              key={player.name}
              className={classNames("inline", "p-1", "m-1", "rounded", {
                "game-board-player__active": player === currentPlayer,
              })}
            >
              <span>
                {player.name} {player.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-center mt-3">Guess the flag</h1>
      <img className="game-board-img" src={getFlagImgPath(flag)} alt="Flag" />

      <div className="text-center">
        <div className="text-2xl mt-2 mb-2">
          {/* To prevent layout jumping, we keep this div around at all times */}
          {isAnswerVisible ? flag.countryName : <span>&nbsp;</span>}
        </div>

        {isAnswerVisible ? (
          <div>
            <button
              className="button mr-1"
              onClick={() => markAsCorrectAnswer()}
            >
              <span role="img" aria-label="Correct">
                👍
              </span>
            </button>
            <button className="button" onClick={() => moveToNextQuestion()}>
              <span role="img" aria-label="Wrong">
                👎
              </span>
            </button>
          </div>
        ) : (
          <button className="button" onClick={() => revealAnswer()}>
            Show me
          </button>
        )}
      </div>
    </div>
  );
}

function Results({
  results,
  onStartNewGame,
}: {
  results: Player[];
  onStartNewGame: () => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">It's over!!</h1>
      <h3>The results</h3>
      {results
        .sort((pA, pB) => pA.score - pB.score)
        .map((player) => (
          <div key={player.name}>
            {player.name} - {player.score}
          </div>
        ))}
      <button className="button" onClick={onStartNewGame}>
        New game
      </button>
    </div>
  );
}
