import { useEffect, useRef, useState, useCallback } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [preGameImage, setPreGameImage] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [speed, setSpeed] = useState(200);

  const canvasSize = 350;
  const gridSize = 20;

  useEffect(() => {
    const img = new Image();
    img.src = "./images/games/snake-game/snake-game.jpg";
    img.onload = () => setPreGameImage(img);
  }, []);

  const generateFood = () => ({
    x: Math.floor(Math.random() * (canvasSize / gridSize)),
    y: Math.floor(Math.random() * (canvasSize / gridSize)),
  });

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    setCountdown(3);
    setCountdownActive(false);
    setDifficulty(null);
  };

  const selectDifficulty = (level) => {
    const speeds = {
      noob: 250,
      gamer: 160,
      hacker: 80,
    };
    setSpeed(speeds[level]);
    setDifficulty(level);
    startGame();
  };

  const startGame = () => {
    setCountdown(3);
    setCountdownActive(true);
    let timer = 3;
    const countdownInterval = setInterval(() => {
      timer -= 1;
      setCountdown(timer);
      if (timer === 0) {
        clearInterval(countdownInterval);
        setCountdownActive(false);
        setGameStarted(true);
      }
    }, 1000);
  };

  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] };
      if (direction === "UP") head.y -= 1;
      if (direction === "DOWN") head.y += 1;
      if (direction === "LEFT") head.x -= 1;
      if (direction === "RIGHT") head.x += 1;

      const newSnake = [head, ...prevSnake.slice(0, -1)];

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvasSize / gridSize ||
        head.y >= canvasSize / gridSize ||
        prevSnake.some((part) => part.x === head.x && part.y === head.y)
      ) {
        setGameOver(true);
        return prevSnake;
      }

      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => prevScore + 1);
        setFood(generateFood());
        return [...newSnake, prevSnake[prevSnake.length - 1]];
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted]);

  const drawGame = useCallback(() => {
    const ctx = canvasRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, canvasSize, canvasSize);
    gradient.addColorStop(0, "#0f2027");
    gradient.addColorStop(0.5, "#203a43");
    gradient.addColorStop(1, "#2c5364");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? "#FFD700" : "#32CD32";
      ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
      ctx.strokeStyle = "#006400";
      ctx.strokeRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
    });

    ctx.beginPath();
    ctx.arc(
      food.x * gridSize + gridSize / 2,
      food.y * gridSize + gridSize / 2,
      gridSize / 2.5,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#8B0000";
    ctx.stroke();

    if (!gameStarted && preGameImage && !countdownActive) {
      ctx.drawImage(preGameImage, 0, 0, canvasSize, canvasSize);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = "#fff";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Select Difficulty to Start", canvasSize / 2, canvasSize - 20);
    }

    if (countdownActive && countdown > 0) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = "#fff";
      ctx.font = "30px Arial";
      ctx.textAlign = "center";
      ctx.fillText(countdown, canvasSize / 2, canvasSize / 2);
    }

    if (gameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = "#fff";
      ctx.font = "28px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvasSize / 2, canvasSize / 2 - 20);
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${score}`, canvasSize / 2, canvasSize / 2 + 20);
    }
  }, [snake, food, gameOver, gameStarted, countdownActive, countdown, preGameImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, speed);

    return () => clearInterval(interval);
  }, [moveSnake, speed]);

  useEffect(() => {
    drawGame();
  }, [snake, food, gameOver, gameStarted, drawGame]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  return (
<div className="game-container">
  <h1>Snake Game</h1>
  <canvas
    ref={canvasRef}
    width={canvasSize}
    height={canvasSize}
    style={{ border: "2px solid black", margin: "20px", borderRadius: "10px" }}
  ></canvas>
  <div>
    <h2>Score: {score}</h2>
    {!gameStarted && !gameOver && !difficulty && (
      <div className="difficulty-selection">
        <button onClick={() => selectDifficulty("noob")} className="difficulty-button">
          Noob
        </button>
        <button onClick={() => selectDifficulty("gamer")} className="difficulty-button">
          Gamer
        </button>
        <button onClick={() => selectDifficulty("hacker")} className="difficulty-button">
          Hacker
        </button>
      </div>
    )}
    {gameOver && (
      <button onClick={resetGame} className="restart-button">
        Restart Game
      </button>
    )}
  </div>
</div>

  );
};

export default SnakeGame;


export const displaySnakeGame = () => {
  return <SnakeGame></SnakeGame>;
};
