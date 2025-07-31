import type { SynthParameter, SynthValue } from '../../types';
import './SynthParameterSlider.scss';

type SynthControlsProps = {
    synthValue: SynthValue;
    synthParameter: SynthParameter;
    handleSynthValueChange: Function;
};

function SynthParameterSlider({
    synthValue,
    synthParameter,
    handleSynthValueChange: handleSynthValueChange,
}: SynthControlsProps) {
    const { label, min, max, step } = synthParameter;
    const { key, value } = synthValue;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSynthValueChange({ key, value: Number(e.target.value) });
    };

    return (
        <>
            <label>
                <div className="row">
                    <span>{label}:</span>
                    <span>{value}</span>
                </div>

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    step={step}
                    onInput={handleInput}
                />
            </label>
        </>
    );
}

export default SynthParameterSlider;
