import { useCallback, useState, type MouseEventHandler } from 'react';
import { DEFAULT_PATCH } from '../../config/manualPatchConfig.ts';
import { playNote } from '../../services/ManualSynthService.ts';
import type { Patch, WaveForm } from '../../types/.index.ts';
import { Button } from '../Button/.index.ts';
import SynthParameterAdjuster from '../SynthParameterAdjuster/SynthParameterAdjuster.tsx';
import './SynthControls.scss';

function SynthControls() {
    const [patch, setPatch] = useState<Patch>(DEFAULT_PATCH);

    const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
        playNote(patch);
    };

    const handleSynthValueChange = useCallback((name: string, value: WaveForm | number) => {
        setPatch((prevPatch) => ({
            ...prevPatch,
            [name]: { config: { ...prevPatch[name].config }, value },
        }));
    }, []);

    return (
        <div className="synth-controls">
            <div className="row">
                <h2>Synth Controls</h2>
            </div>

            {Object.entries(patch).map(([key, param]) => (
                <SynthParameterAdjuster
                    key={key}
                    name={key}
                    param={param}
                    handleSynthValueChange={handleSynthValueChange}
                />
            ))}

            <Button buttonType="Primary" onClick={handleOnClick}>
                Play Note
            </Button>
        </div>
    );
}

export default SynthControls;
