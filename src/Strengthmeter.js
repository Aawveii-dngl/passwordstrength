import React from 'react'
import zxcvbn from 'zxcvbn';

export default function Strengthmeter({password}) {
    const Testresult = zxcvbn(password);
    const num = Testresult.score* 100/4;

    const Createpwlabel = () =>{
        switch(Testresult.score){
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return 'none';
        }
    }

    const funcnProgress = () =>{
        switch(Testresult.score){
            case 0:
                return 'white';
            case 1:
                return 'blue';
            case 2:
                return 'green';
            case 3:
                return 'orange';
            case 4:
                return 'red';
            default:
                return 'none';
        }
    }

    const changeProclcr = () =>({
        width: `${num}%`,
        background:funcnProgress(),

    })
    return (
       <div>
        <div className = 'progress' style={{height:'px'}}>
                <div className = 'progress-bar' style = {changeProclcr()}></div>
        </div>
        <p style ={{color:funcnProgress()}} class="text-right">{Createpwlabel()}</p>
       </div>
    )
}
