import { AuthContext } from "@/context/context";
import {  useContext } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { CaretDown, Gear, Gift, Medal, SignOut } from "phosphor-react";
import { ButtonForum, ButtonMyAccountForumPage } from "./styles";


interface ButtonVariant{
    ButtonVariant?: string
}

const PopoverComponent = ({ButtonVariant}: ButtonVariant) => {
const { logout } = useContext(AuthContext);
  return (
    <div>
            <Popover>
              <PopoverTrigger>
                {" "}
                <ButtonForum className="flex items-center gap-2">
                {ButtonVariant === "square"?  (
                   <>
                   Minha conta
                   <CaretDown  size={20}
                   weight="bold"
                   />
                   </>
                ): (
                   <>
                   JQ
                   <CaretDown  size={20}
                   weight="bold"
                   />
                   </>
                )}
                </ButtonForum>               
              </PopoverTrigger>
              <PopoverContent className="bg-zinc-800 border-0 w-[360px] text-zinc-50 !mr-[40px] !mt-[20px]">
                <div className="flex flex-col cursor-pointer">
                  <div className="hover:bg-zinc-700 duration-200">
                    <div className="flex gap-4 border-b border-zinc-600 !pb-4 items-center !p-4">
                  <ButtonMyAccountForumPage>JQ</ButtonMyAccountForumPage>
                      <div className="flex flex-col p-4">
                        <span className="">Jose Italo</span>
                        <span className="text-sm text-zinc-300">
                          @joseitalo
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="hover:bg-zinc-700 duration-200">
                      <div className="flex items-center gap-2 !p-4">
                        <Gear size={24} className="text-violet-500" />
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold">
                            Minha conta
                          </span>
                          <span className="text-[12px] text-zinc-200">
                            Gerencie dados e preferências
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="hover:bg-zinc-700 duration-200" >
                      <div className="flex items-center gap-2 !p-4">
                        <Gift size={24} className="text-violet-500" />
                        <div className="flex flex-col">
                          <span className="text-[14px] font-bold">
                            Minha conta
                          </span>
                          <span className="text-[12px] text-zinc-200">
                            Gerencie dados e preferências
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="hover:bg-zinc-700 duration-200  ">
                      <div className="flex items-center gap-2 !p-4">
                        <Medal size={24} className="text-violet-500" />
                        <div className="flex flex-col ">
                          <span className="text-[14px] font-bold ">
                            Minha conta
                          </span>
                          <span className="text-[12px] text-zinc-200">
                            Gerencie dados e preferências
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-zinc-600 !py-4 hover:bg-zinc-700 duration-200">
                        <div className="!px-4 flex items-center gap-4 text-[14px] text-red-400" onClick={() =>{
                            logout()
                        }}>
                        <SignOut size={24} />
                        <span>Sair da conta</span>
                        </div>
                      </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
  )
}

export default PopoverComponent