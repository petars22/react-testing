export const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

export const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const buttonVariants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-200 hover:bg-slate-100",
    ghost: "bg-transparent hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
};