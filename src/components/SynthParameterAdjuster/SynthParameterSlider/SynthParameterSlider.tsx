import React, { useCallback } from 'react';
import type { NumericParameter } from '../../../types/.index';
import './SynthParameterSlider.scss';

type SynthControlsProps = {
    section: string;
    name: string;
    param: NumericParameter;
    handleSynthValueChange: Function;
};

function SynthParameterSlider({
    section,
    name,
    param,
    handleSynthValueChange,
}: SynthControlsProps) {
    const { config, value } = param;
    const { label, min, max, step } = config;

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleSynthValueChange(section, name, Number(e.target.value));
    }, []);

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
