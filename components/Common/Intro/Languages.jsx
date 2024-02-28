import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [indo, setIndo] = useState(0)
    const [machine, setMachine] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (indo < 100) {
                setIndo(prevCount => prevCount + 1);
            }
            if (english < 100) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (machine < 100) {
                setMachine(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [indo, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#8cff00" type="circle" percent={indo} size={50} />
                        {/* <Progress strokeColor="#1fdf64" type="circle" percent={indo} size={50} /> */}
                        <span className='text-xs font-bold text-[#8cff00bf]'>Indo</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#8cff00" type="circle" percent={english} size={50} />
                        <span className='text-xs font-bold text-[#8cff00bf]'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#8cff00" type="circle" percent={machine} size={50} />
                        <span className='text-xs font-bold text-[#8cff00bf]'>Machine</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages