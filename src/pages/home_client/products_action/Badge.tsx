interface BadgeProps {
    text: string;
  }
  
  export const Badge = ({ text }: BadgeProps) => (
    <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-base font-medium rounded-full text-white bg-neutral-700">
      {text}
    </div>
  );
  