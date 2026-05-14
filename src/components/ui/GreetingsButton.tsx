import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "こんにちは",
  "नमस्ते",
  "নমস্কার",
  "Hola",
  "Kamusta",
];

const GRID_SIZE = 18;
const INITIAL_SNAKE = [{ x: 8, y: 8 }];

export default function GreetingSnakeButton() {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  // snake state
  const [snake, setSnake] = React.useState(INITIAL_SNAKE);
  const [food, setFood] = React.useState({ x: 12, y: 10 });
  const [direction, setDirection] = React.useState({ x: 1, y: 0 });
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  // rotating greetings
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  // WASD + arrow controls
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case "arrowup":
        case "w":
          setDirection((prev) =>
            prev.y === 1 ? prev : { x: 0, y: -1 }
          );
          break;

        case "arrowdown":
        case "s":
          setDirection((prev) =>
            prev.y === -1 ? prev : { x: 0, y: 1 }
          );
          break;

        case "arrowleft":
        case "a":
          setDirection((prev) =>
            prev.x === 1 ? prev : { x: -1, y: 0 }
          );
          break;

        case "arrowright":
        case "d":
          setDirection((prev) =>
            prev.x === -1 ? prev : { x: 1, y: 0 }
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // snake game loop
  React.useEffect(() => {
    if (!open || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];

        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y,
        };

        // wall collision
        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prev;
        }

        // self collision
        if (
          prev.some(
            (segment) =>
              segment.x === newHead.x &&
              segment.y === newHead.y
          )
        ) {
          setGameOver(true);
          return prev;
        }

        const updated = [newHead, ...prev];

        // food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);

          setFood({
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
          });

          return updated;
        }

        updated.pop();
        return updated;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [direction, food, open, gameOver]);

  // restart game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection({ x: 1, y: 0 });
    setFood({ x: 12, y: 10 });
    setScore(0);
    setGameOver(false);
  };

  return (
    <>
      {/* greeting button */}
      <div className="hidden md:flex">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 35px rgba(212,175,55,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[rgba(212,175,55,0.25)]
            bg-black/40
            px-7 py-2
            text-[#f5f0e8]
            backdrop-blur-xl
          "
        >
          {/* shine */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              -translate-x-full
              animate-[shine_3s_linear_infinite]
            "
          />

          <div className="relative z-10 flex items-center gap-3">
            <span className="text-lg">🌍</span>

            <AnimatePresence mode="wait">
              <motion.span
                key={greetings[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="min-w-[90px] text-center tracking-wide"
              >
                {greetings[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.button>
      </div>

      {/* popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/80 backdrop-blur-md
            "
          >
            {/* glow background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
              <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
            </div>

            {/* modal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="
                relative
                w-[95%] max-w-xl
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-[#090909]/95
                p-8
                shadow-[0_0_80px_rgba(212,175,55,0.15)]
              "
            >
              {/* top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

              {/* close */}
              <button
                onClick={() => {
                  setOpen(false);
                  resetGame();
                }}
                className="
                  absolute right-5 top-5
                  text-white/50
                  transition hover:text-white
                "
              >
                ✕
              </button>

              {/* title */}
              <div className="mb-6 text-center">
                <h1 className="text-4xl font-bold text-[#f5f0e8]">
                  Neon Snake
                </h1>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
                  WASD or Arrow Keys
                </p>
              </div>

              {/* score */}
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3">
                  <p className="text-xs text-white/40">SCORE</p>

                  <h2 className="text-center text-2xl text-yellow-400">
                    {score}
                  </h2>
                </div>
              </div>

              {/* board */}
              <div
                className="
                  mx-auto grid
                  rounded-3xl
                  border border-white/10
                  bg-black/40
                  p-3
                "
                style={{
                  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                  width: "100%",
                  maxWidth: "520px",
                  aspectRatio: "1 / 1",
                }}
              >
                {Array.from({
                  length: GRID_SIZE * GRID_SIZE,
                }).map((_, i) => {
                  const x = i % GRID_SIZE;
                  const y = Math.floor(i / GRID_SIZE);

                  const isSnake = snake.some(
                    (s) => s.x === x && s.y === y
                  );

                  const isHead =
                    snake[0]?.x === x &&
                    snake[0]?.y === y;

                  const isFood =
                    food.x === x && food.y === y;

                  return (
                    <div
                      key={i}
                      className="relative border border-black/10"
                    >
                      {/* snake */}
                      {isSnake && (
                        <motion.div
                          layout
                          className={`
                            absolute inset-[1px] rounded-[4px]
                            ${
                              isHead
                                ? "bg-yellow-300 shadow-[0_0_18px_rgba(255,215,0,0.9)]"
                                : "bg-yellow-500"
                            }
                          `}
                        />
                      )}

                      {/* food */}
                      {isFood && (
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                          }}
                          className="
                            absolute inset-[4px]
                            rounded-full
                            bg-red-500
                            shadow-[0_0_20px_rgba(255,0,0,0.8)]
                          "
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* footer */}
              <div className="mt-6 text-center text-sm text-white/45">
                Eat the glowing orbs ✨
              </div>

              {/* game over */}
              <AnimatePresence>
                {gameOver && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                      absolute inset-0
                      flex flex-col items-center justify-center
                      bg-black/85 backdrop-blur-md
                    "
                  >
                    <h2 className="mb-3 text-5xl font-bold text-red-400">
                      Game Over
                    </h2>

                    <p className="mb-2 text-white/60">
                      Final Score: {score}
                    </p>

                    <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/30">
                      The snake has fallen
                    </p>

                    <div className="flex gap-4">
                      {/* restart */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetGame}
                        className="
                          rounded-2xl
                          border border-yellow-500/30
                          bg-yellow-500/10
                          px-6 py-3
                          text-[#f5f0e8]
                          transition
                          hover:bg-yellow-500/20
                        "
                      >
                        Play Again
                      </motion.button>

                      {/* return */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOpen(false);
                          resetGame();
                        }}
                        className="
                          rounded-2xl
                          border border-white/10
                          bg-white/5
                          px-6 py-3
                          text-white/70
                          transition
                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        Return
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}