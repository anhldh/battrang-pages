type IconProps = {
  size?: number
  color?: string
  strokeWidth?: number
}

const base = (size: number, color: string, strokeWidth: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const AmphoraIcon = ({ size = 19, color = '#2c4a76', strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
    <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
    <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
    <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
    <path d="M18 22H6" />
    <path d="M9 2h6" />
  </svg>
)

export const HomeIcon = ({ size = 19, color = '#2c4a76', strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
)

export const UserIcon = ({ size = 19, color = '#2c4a76', strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
)

export const FlameIcon = ({ size = 19, color = '#2c4a76', strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
)

export const LandmarkIcon = ({ size = 19, color = '#2c4a76', strokeWidth = 1.4 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="M3 22h18" />
    <path d="M6 18v-7" />
    <path d="M10 18v-7" />
    <path d="M14 18v-7" />
    <path d="M18 18v-7" />
    <path d="M12 2 20 7H4z" />
  </svg>
)

export const SearchIcon = ({ size = 16, color = 'rgba(43,33,26,.5)', strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const MenuIcon = ({ size = 22, color = '#2b211a', strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
)

export const CloseIcon = ({ size = 22, color = '#2b211a', strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export const ChevronRightIcon = ({ size = 16, color = 'currentColor', strokeWidth = 1.5 }: IconProps) => (
  <svg {...base(size, color, strokeWidth)}>
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export const PlayIcon = ({ size = 13, color = '#2c4a76' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M8 5v14l11-7z" />
  </svg>
)
