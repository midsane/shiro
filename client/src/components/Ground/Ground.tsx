import { createPortal } from "react-dom";

const GRID_COLS = 200;
const GRID_ROWS = 200;

const createArray = (n: number): number[] => {
    return Array.from({ length: n });
};

export const Ground: React.FC = () => {
    return createPortal(
        <div
            className={`fixed overflow-scroll h-screen w-screen top-0 left-0 z-0 grid bg-stone-800`}
            style={{
                gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 10fr))`, // Dynamic column configuration
            }}
        >
            {createArray(GRID_COLS * GRID_ROWS).map((_, index) => (
                <div
                    key={index}
                    className="bg-black border border-gray-700 w-20 aspect-square"
                ></div>
            ))}
        </div>,
        document.body
    );
};
