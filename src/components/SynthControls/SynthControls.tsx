import { useState, type MouseEventHandler } from 'react';
import { manualSynthPanel } from '../../data/manualSynthPanel.ts';
import { playNote } from '../../services/ManualSynthService.ts';
import calculateInitSynthPatch from '../../utils/calculateInitSynthPatch.ts';
import Button from '../Button/Button.tsx';
import { SynthParameterSlider, type SynthValue } from '../SynthParameterSlider/index.ts';
import './SynthControls.scss';

const initSynthPatch = calculateInitSynthPatch();

function SynthControls() {
    const [synthPatch, setSynthPatch] = useState(initSynthPatch);

    const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
        playNote(synthPatch);
    };

    const handleSynthValueChange = ({ key, value }: SynthValue) => {
        setSynthPatch((previousSynthPatch) => ({
            ...previousSynthPatch,
            [key]: value,
        }));
    };

    return (
        <div className="synth-controls">
            <div className="row">
                <h2>Synth Controls</h2>
            </div>

            {Object.entries(manualSynthPanel).map(([key, synthParameter]) => (
                <SynthParameterSlider
                    key={key}
                    synthValue={{ key, value: synthPatch[key] }}
                    synthParameter={synthParameter}
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
