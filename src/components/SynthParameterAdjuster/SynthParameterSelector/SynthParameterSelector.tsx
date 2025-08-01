import React, { useCallback } from 'react';
import type { WaveParameter } from '../../../types/.index';
import { WaveForm } from '../../../types/enums/WaveForm';
import './SynthParameterSelector.scss';

type SynthControlsProps = {
    name: string;
    param: WaveParameter;
    handleSynthValueChange: Function;
};

function SynthParameterSelector({ name, param, handleSynthValueChange }: SynthControlsProps) {
    const { config, value } = param;
    const { label } = config;

    const handleInput = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSynthValueChange(name, String(e.target.value));
    }, []);

    return (
        <>
            <label>
                <div className="row">
                    <span>{label}:</span>
                    <span>{value}</span>
                </div>

                <select onChange={handleInput}>
                    {Object.keys(WaveForm).map((e) => {
                        return (
                            <option key={e} value={e}>
                                {e}
                            </option>
                        );
                    })}
                </select>
            </label>
        </>
    );
}

export default SynthParameterSelector;
