const SIZE = 5;
const GAP = 20;
const cells = Array.from({ length: SIZE * SIZE }, (_, n) => ({ row: Math.floor(n / SIZE), col: n % SIZE }));

// A 5×5 dot grid; `.dots` circles pop in along the diagonal when it scrolls into view.
const Dots = ({ className = '', delay = 0 }) => (
	<svg
		className={`dots ${className}`}
		style={{ '--d': `${delay}ms` }}
		width="84"
		height="84"
		viewBox="0 0 84 84"
		fill="none"
		aria-hidden="true"
	>
		{cells.map(({ row, col }) => (
			<circle key={`${row}-${col}`} cx={2 + col * GAP} cy={2 + row * GAP} r="2" fill="#ABB2BF" style={{ '--i': row + col }} />
		))}
	</svg>
);

export default Dots
