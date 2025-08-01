import { useCallback, useState, type MouseEventHandler } from 'react';
import { INIT_PATCH } from '../../config/manualPatchConfig.ts';
import { playNote } from '../../services/SynthPlayerService.ts';
import type { Patch, WaveForm } from '../../types/.index.ts';
import { Button } from '../Button/.index.ts';
import SynthParameterAdjuster from '../SynthParameterAdjuster/SynthParameterAdjuster.tsx';
import './SynthControls.scss';

function SynthControls() {
    const [patch, setPatch] = useState<Patch>(INIT_PATCH);

    const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
        playNote(patch);
    };

    const handleSynthValueChange = useCallback(
        (section: string, name: string, value: WaveForm | number) => {
            setPatch((prevPatch) => ({
                ...prevPatch,
                [section]: {
                    ...prevPatch[section],
                    content: {
                        ...prevPatch[section].content,
                        [name]: { ...prevPatch[section].content[name], value },
                    },
                },
            }));
        },
        [],
    );

    return (
        <div className="synth-controls">
            <div className="row">
                <h2>Synth Controls</h2>
            </div>

            {Object.entries(patch).map(([key, section]) => (
                <div key={key}>
                    <h4>{section.label}</h4>
                    {Object.entries(section.content).map(([subKey, param]) => (
                        <SynthParameterAdjuster
                            key={subKey}
                            section={key}
                            name={subKey}
                            param={param}
                            handleSynthValueChange={handleSynthValueChange}
                        />
                    ))}
                </div>
            ))}

            <Button buttonType="Primary" onClick={handleOnClick}>
                Play Note
            </Button>
        </div>
    );
}

export default SynthControls;
