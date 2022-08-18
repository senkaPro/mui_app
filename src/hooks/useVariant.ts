import { useEffect, useState } from 'react'

interface Props {
    titleColor: any,
    cardColor: any,
    linkColor: any
}

const useVariant = (variant: "dark" | undefined) => {   
    const [state, setState] = useState<Props | any>({})
    useEffect(() => {
        variant === "dark" ? setState({
            cardColor: { 
                background: "#000032",
                color: "#fff"
            },
            titleColor: {
                color: "#FFFFFF" 
            },
            linkColor: {
                color: "#00C48C"
            }
        })
        : setState({
            cardColor: { 
                background: "#ffffff",
                color: "#103B66"
            },
            titleColor: {
                color: "#103B66" 
            },
            linkColor: {
                color: "#21B8F9"
            }
        })
    },[variant])   
    
  return state
}

export default useVariant
