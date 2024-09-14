import Sidebar from "../..";
import { Tabs, TabsRef } from "flowbite-react";
import { useRef } from "react";
import BankAndTransfer from "./PaymentMethod/BankAndTransfer";
import Cryptocurrency from "./PaymentMethod/Cryptocurrency";
import PerfectMoney from "./PaymentMethod/PerfectMoney";
import Paypal from "./PaymentMethod/Paypal";
import PaymentSettings from "../../../MobileSidebar/MobileuserTimeline/PaymentSettings";

import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

export default function Index() {
  const tabsRef = useRef<TabsRef>(null);
  return (
    <div>
      <div className="hidden sm:block">
        <Sidebar>
          <div className="bg-[#f5f5f8]">
            <div className=" pl-10 pt-[70px] font-semibold text-[#174568] md:text-2xl lg:pl-24">
              Payment Settings
            </div>
            <div className="my-8 rounded-md border border-dashed border-[#9747FF] pb-5 lg:ml-5 lg:mr-[160px] xl:mr-[265px]">
              <div className="mt-6 rounded-lg border-transparent bg-white pl-7 pt-7 font-medium text-[#174568] md:text-2xl lg:mx-[10px] lg:w-[630px] xl:w-[700px]">
                <div className="pb-3 text-[25px] font-semibold">
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
                    <Tabs.Item
                      title="Cryptocurrency"
                      icon={IoIosRadioButtonOff}
                    >
                      <Cryptocurrency />
                    </Tabs.Item>
                    <Tabs.Item title="PerfectMoney" icon={IoIosRadioButtonOff}>
                      <PerfectMoney />
                    </Tabs.Item>
                  </Tabs>
                </div>

                <div className="pb-1 pt-12 text-[8px] md:pl-[210px] lg:pl-[270px]">
                  Please click on any of your preferred payment method
                </div>
              </div>
            </div>

            <div className="pb-[430px]">.</div>
          </div>
        </Sidebar>
      </div>
      <div>
        <PaymentSettings />
      </div>
    </div>
  );
}
