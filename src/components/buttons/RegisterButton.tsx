import Link from "next/link";

interface RegisterButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function RegisterButton({
  children,
  className = "",
  variant = "primary"
}: RegisterButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-montserrat font-medium tracking-wide transition-all duration-200";

  const variantStyles = {
    primary: "bg-white text-black hover:bg-gray-100 hover:scale-105",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <Link
      href="https://chat.enso.sh/register"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
