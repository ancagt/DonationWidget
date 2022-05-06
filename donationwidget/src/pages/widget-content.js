import React, { useState } from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
const WidgetContent = ({ saveWasClicked }) => {
    const daysNumber = 3;
    const [donorsNumber, setDonorsNumber] = useState(42);
    const [donatingAmount, setDonatingAmount] = useState(0);
    const neededAmount = 10000;
    const [totalDonatedMoney, setTotalDonatedMoney] = useState(0);
    const [remainedMoney, setRemainedMoney] = useState(neededAmount);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);
    const [progressBarStyle, setProgressBarStyle] = useState({});

    const handleChange = (event) => {
        setDonatingAmount(event.target.value);
    };

    const whenHoverProgressBar = (param) => {
        if (param == "over")
            setIsTooltipVisible(!isTooltipVisible);
    }

    const onGiveClick = () => {
        if ((donatingAmount != 0) && (!(donatingAmount < 0))) {
            setDonorsNumber(donorsNumber + 1);

            setTotalDonatedMoney(parseFloat(totalDonatedMoney) + parseFloat(donatingAmount));

            setProgressWidth((parseFloat(totalDonatedMoney) + parseFloat(donatingAmount)) * 100 / neededAmount);

            var leftMoney = neededAmount - (parseFloat(totalDonatedMoney) + parseFloat(donatingAmount));
            if (leftMoney < 0) {
                leftMoney = 0;
            }
            setRemainedMoney(leftMoney);
            var progressWidthPercentage = parseFloat(progressWidth);

            progressWidthPercentage = progressWidthPercentage + "%";
            setProgressBarStyle({
                width: progressWidthPercentage,
                backgroundColor: "lightgreen",
                height: "20px",
                maxWidth: "100%",
                position: "inherit",
                bottom: "151px",
                left: "150px"
            });
        };
    }
    return (
        <div className="widget-content">
            <div className='progressBar'>
                {isTooltipVisible && <div className="tooltip">{remainedMoney}$ needed for this project</div>}
                <div className="progress" style={{ width: "350px", backgroundColor: "#aee7c2", height: "20px", display: "inline-flex" }}
                    onMouseOver={() => whenHoverProgressBar("over")}
                >
                    <div className='progress-bar-element'
                        role="progressbar"
                        style={progressBarStyle} >
                    </div>
                </div>
            </div>
            <div>
                <b style={{ color: 'lightblue' }}> Only {daysNumber} days left</b> to fund this project.
            </div>

            <div className="content-field">
                Join the <b>{donorsNumber}</b> other donors who have already supported this project. Every dollar helps.
            </div>


            <div className='input-send-fields'>
                <FormControl className='form-control'>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={donatingAmount}
                        onChange={(event) => handleChange(event)}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type="number"
                    />
                </FormControl>
                <Button variant="contained" style={{ backgroundColor: 'lightgreen' }} onClick={onGiveClick}>Give now</Button>
            </div>
            {saveWasClicked && <div><p className='paragraphStyle'><i>Why give ${donatingAmount} ?</i></p></div>}
        </div>
    );
};

export default WidgetContent;