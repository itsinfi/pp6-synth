import React, { useCallback } from 'react';
import type { WaveParameter } from '../../../types/.index';
import { WaveForm } from '../../../types/enums/WaveForm';
import './SynthParameterSelector.scss';

type SynthControlsProps = {
    section: string;
    name: string;
    param: WaveParameter;
    handleSynthValueChange: Function;
};

function SynthParameterSelector({
    section,
    name,
    param,
    handleSynthValueChange,
}: SynthControlsProps) {
    const { config, value } = param;
    const { label } = config;

    const handleInput = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSynthValueChange(section, name, String(e.target.value));
    }, []);

    return (
        <>
            <label>
                <span>{label}:</span> <br />
                <select onChange={handleInput} value={value}>
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
