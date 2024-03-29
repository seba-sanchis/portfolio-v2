export default function Button({
  cta,
  isPending,
}: {
  cta: string;
  isPending: boolean;
}) {
  return (
    <button
      type="submit"
      aria-disabled={isPending}
      className="group relative self-center py-4 px-6 w-max rounded text-transparent bg-red-to-pink-to-purple-horizontal-gradient hover:animate-spin-gradient"
    >
      <span className="flex justify-center items-center absolute inset-px bg-[--page-bg-radial-gradient] rounded text-[--primary-contrast] group-hover:bg-soft-pink-radial-gradient group-hover:opacity-90 group-active:opacity-80">
        {isPending ? "Sending..." : cta}
      </span>
      Send message
      <span className="flex justify-center items-center absolute inset-px bg-[--page-background] rounded text-[--primary-contrast] group-hover:opacity-0">
        Send message
      </span>
    </button>
  );
}
