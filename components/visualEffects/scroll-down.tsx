type scrollDownProps = {
  className?: string;
};

export default function ScrollDown({ className }: scrollDownProps) {
  return (
    <div className=" grid place-items-center">
      <div className="grid place-items-center w-[2.9rem] h-[3.6rem]">
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
