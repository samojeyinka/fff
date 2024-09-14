import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Input from "@mui/joy/Input";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { IoIosArrowDown } from "react-icons/io";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "flowbite-react";
import { ChangeEvent, SetStateAction } from "react";

function valuetext(value: unknown) {
  return `${value}°C`;
}

export default function MobileSortGigs() {
  const [value, setValue] = React.useState([1, 30]);

  const handleChange = (
    event: ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    setValue(newValue as SetStateAction<number[]>);
  };

  return (
    <div>
      {/* MOBILE DEVICES */}
      <div className="text-xs md:hidden">
        <div className="flex pl-1 pt-4">
          {/* budget */}
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    {...bindTrigger(popupState)}
                    className="rounded-xl border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                  >
                    <div className="flex px-3 py-1.5">
                      <div>Budget</div>
                      <div>
                        <IoIosArrowDown className="ml-2 mt-1" />
                      </div>
                    </div>
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div className="mt-[-10px] pb-6 pl-2 text-xs font-semibold">
                        Select Budget
                      </div>
                      <div>
                        <Box sx={{ width: 200 }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                          />
                        </Box>
                      </div>
                      <div className="flex justify-between text-[12px] font-semibold">
                        <div>$5</div>
                        <div>$5000</div>
                      </div>

                      <div className="flex justify-between pt-2 font-semibold text-black">
                        <div className="rounded-full border border-black px-7 py-0.5 text-[#174568]">
                          $5.00
                        </div>

                        <div className="rounded-full border border-black px-7 py-0.5 text-[#174568]">
                          $800.00
                        </div>
                      </div>

                      <div className="flex justify-between px-5 pb-5 pt-2 font-semibold text-black">
                        <div>Min.</div>
                        <div>Max.</div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>

          {/* Filter Hellocians */}
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    {...bindTrigger(popupState)}
                    className="mx-5 rounded-xl border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                  >
                    <div className="flex px-3 py-1.5">
                      <div>Filter Hellocians</div>
                      <div>
                        <IoIosArrowDown className="ml-2 mt-1" />
                      </div>
                    </div>
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div className="text-sm">
                        <div className="mt-[-10px] pb-2 pl-2 text-xs">
                          Filter Hellocians
                        </div>
                        <div className="flex">
                          <div>
                            {/* STARS */}
                            <div className="pl-4">
                              <Stack spacing={1}>
                                <Rating
                                  name="half-rating"
                                  defaultValue={2.5}
                                  precision={0.5}
                                />
                              </Stack>
                            </div>
                            <div className="pl-7 text-xs font-semibold">
                              Rating
                            </div>
                            <div className="pl-5 pt-9 text-xs font-semibold">
                              Availability
                            </div>
                            {/* SELECT BETWEEN ACTIVE OR BUSY */}
                            <div className="pl-8 pt-1">
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="Active"
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="Active"
                                    control={<Radio />}
                                    label="Active"
                                  />
                                  <FormControlLabel
                                    value="Busy"
                                    control={<Radio />}
                                    label="Busy"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>

                          <div className="pl-3">
                            <div className="text-xs font-semibold">
                              Past Delivery
                            </div>

                            {/* DELIVERY SELECTION (FAST, EXTRA FAST OR NORMAL) */}
                            <div className="pl-4 pt-2">
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="Normal"
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="Normal"
                                    control={<Radio />}
                                    label="Normal"
                                    className=""
                                  />
                                  <FormControlLabel
                                    value="Fast"
                                    control={<Radio />}
                                    label="Fast"
                                  />
                                  <FormControlLabel
                                    value="Extra Fast"
                                    control={<Radio />}
                                    label="Extra Fast"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                            <div>
                              <div className="pb-0.5 pt-1 text-xs font-semibold">
                                Keywords
                              </div>
                              <div>
                                <Input className="w-[120px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>

          {/* Service Type */}
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    {...bindTrigger(popupState)}
                    className="rounded-xl border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                  >
                    <div className="flex px-3 py-1.5">
                      <div>Service Type</div>
                      <div>
                        <IoIosArrowDown className="ml-2 mt-1" />
                      </div>
                    </div>
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div className="w-52 pl-3">
                        <div className="pb-2 text-xs font-semibold">
                          Service Type
                        </div>

                        {/* CheckBox  */}
                        <div
                          className="flex max-w-md flex-col gap-2"
                          id="checkbox"
                        >
                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="uiuxdesign" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">UI UX Design</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="shipping" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">API Integration</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="shipping" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">Website Design</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="shipping" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">AI Development</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="webDevelopment" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">Web Development</div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="blockchainDevelopment" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">
                                Blockchain Development
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                              <Checkbox id="mobileAppDevelopment" />
                            </div>
                            <div className="flex flex-col">
                              <div className="pt-0.5">
                                Mobile App Development
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between pt-5">
                          <div>
                            <button className="rounded-full border border-black px-4 py-0.5 text-[#174568]">
                              Clear
                            </button>
                          </div>

                          <div>
                            <button className="rounded-full border border-[#174568] bg-[#174568] px-4 py-0.5 text-white">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
        </div>

        <div className="ml-[-10px] flex pt-3">
          {/* Sort by */}
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    {...bindTrigger(popupState)}
                    className="mx-5 rounded-xl border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                  >
                    <div className="flex px-3 py-1.5">
                      <div>Sort by</div>
                      <div>
                        <IoIosArrowDown className="ml-2 mt-1" />
                      </div>
                    </div>
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                    <div className="w-52 pl-5">
                        <div className="ml-[-15px] text-xs font-semibold">
                          Sort by
                        </div>

                        {/* RADIO SELECTION */}
                        <div className="pt-1">
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="Best selling gigs"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="Most Views"
                                control={<Radio />}
                                label="Most Views"
                                className=""
                              />
                              <FormControlLabel
                                value="Best Rating"
                                control={<Radio />}
                                label="Best Rating"
                              />
                              <FormControlLabel
                                value="Highest Budget"
                                control={<Radio />}
                                label="Highest Budget"
                              />
                              <FormControlLabel
                                value="Lowest  Budget"
                                control={<Radio />}
                                label="Lowest  Budget"
                              />
                              <FormControlLabel
                                value="Best selling gigs"
                                control={<Radio />}
                                label="Best selling gigs"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>

                        <div className="flex justify-between pt-5">
                          <div className="ml-[-10px]">
                            <button className="rounded-full border border-black px-5 py-0.5 text-[#174568]">
                              Clear
                            </button>
                          </div>

                          <div>
                            <button className="rounded-full border border-[#174568] bg-[#174568] px-5 py-0.5 text-white">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>

          {/* Delivery */}
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <button
                    {...bindTrigger(popupState)}
                    className="rounded-xl border border-[#174568] bg-[#F9F9FF] text-[#174568] hover:bg-[#174568] hover:text-white"
                  >
                    <div className="flex px-3 py-1.5">
                      <div>Delivery</div>
                      <div>
                        <IoIosArrowDown className="ml-2 mt-1" />
                      </div>
                    </div>
                  </button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div className="w-52 pl-5">
                        <div className="ml-[-15px] text-xs font-semibold">
                          Delivery
                        </div>

                        {/* RADIO SELECTION */}
                        <div className="pt-1">
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="Normal"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="Normal"
                                control={<Radio />}
                                label="Normal"
                                className=""
                              />
                              <FormControlLabel
                                value="Extra Fast"
                                control={<Radio />}
                                label="Extra Fast"
                              />
                              <FormControlLabel
                                value="Express"
                                control={<Radio />}
                                label="Express"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>

                        <div className="flex justify-between pt-5">
                          <div className="ml-[-10px]">
                            <button className="rounded-full border border-black px-4 py-0.5 text-[#174568]">
                              Clear
                            </button>
                          </div>

                          <div>
                            <button className="rounded-full border border-[#174568] bg-[#174568] px-4 py-0.5 text-white">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
        </div>
      </div>
    </div>
  );
}
