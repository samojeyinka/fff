import MobileSidebar from "../../../MobileSidebar";
import { Tabs, TabsRef } from "flowbite-react";
import { useRef } from "react";
import BankAndTransfer from "./PaymentMethod/BankAndTransfer";
import Cryptocurrency from "./PaymentMethod/Cryptocurrency";
import PerfectMoney from "./PaymentMethod/PerfectMoney";
import Paypal from "./PaymentMethod/Paypal";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

export default function Index() {
  const tabsRef = useRef<TabsRef>(null);

  return (
    <MobileSidebar>
      <div className="bg-[#f5f5f8] sm:hidden">
        <div className="mx-3 mt-[-90px]">
          <div className="pl-5 pt-5 text-3xl font-semibold text-[#174568]">
            Payment Settings
          </div>

          <div className="mt-6 rounded-lg border-transparent bg-white pl-2 pt-7 font-medium text-[#174568] md:text-2xl lg:mx-[10px] lg:w-[630px] xl:w-[700px]">
            <div className="pl-3 text-xl font-semibold">
              <div>Select your preffered</div>
              <div>payment method to get started</div>
            </div>

            <div className="flex flex-col gap-3">
              <Tabs aria-label="Default tabs" ref={tabsRef}>
                <Tabs.Item
                  active
                  title="Card and Bank Transfer"
                  icon={IoIosRadioButtonOn}
                  className="size-10"
                >
                  <BankAndTransfer />
                </Tabs.Item>
                <Tabs.Item title="Paypal" icon={IoIosRadioButtonOff}>
                  <Paypal />
                </Tabs.Item>
                <Tabs.Item title="Cryptocurrency" icon={IoIosRadioButtonOff}>
                  <Cryptocurrency />
                </Tabs.Item>
                <Tabs.Item title="PerfectMoney" icon={IoIosRadioButtonOff}>
                  <PerfectMoney />
                </Tabs.Item>
              </Tabs>
            </div>

            <div className="grid justify-center pb-5 pt-6 text-[12px] font-semibold">
              Please click on any of your preferred payment method
            </div>
          </div>

          <div className="pb-[430px]">.</div>
        </div>
      </div>
    </MobileSidebar>
  );
}
