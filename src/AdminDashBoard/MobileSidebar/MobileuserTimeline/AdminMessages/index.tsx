import MobileSidebar from "../../../MobileSidebar";

export default function Index() {
  return (
    <MobileSidebar>
      <div className="grid justify-items-center pt-[90px] text-lg md:hidden">
        <div className="mt-[-100px]">
          <div>Please enable desktop version</div>
          <div className="text-center">OR</div>
          <div className="text-center">Access via Desktop</div>
        </div>
      </div>
    </MobileSidebar>
  );
}
