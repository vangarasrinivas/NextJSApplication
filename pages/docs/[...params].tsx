import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {
    const router=useRouter()
    const {params=[]}=router.query
    console.log({params})

    if(params.length===2){
        return (
            <h1>Viewing docs for feature {params[0]} and cancept {params[1]}</h1>
        )
    }else if(params.length==1){
        return (
            <h1>Viewing docs for feature {params[0]}</h1>
        )
    }else{
        return (
            <div><h1>Welcome to Docs</h1></div>
          )
    }
  
}

export default Docs