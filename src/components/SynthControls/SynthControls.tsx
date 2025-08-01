import { useCallback, useState, type MouseEventHandler } from 'react';
import { INIT_PANEL } from '../../config/manualPanelConfig.ts';
import { playNote } from '../../services/SynthPlayerService.ts';
import type { Panel, WaveForm } from '../../types/.index.ts';
import { Button } from '../Button/.index.ts';
import SynthParameterAdjuster from '../SynthParameterAdjuster/SynthParameterAdjuster.tsx';
import './SynthControls.scss';

function SynthControls() {
    const [panel, setPanel] = useState<Panel>(INIT_PANEL);

    const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
        playNote(panel);
    };

    const handleSynthValueChange = useCallback(
        (section: string, name: string, value: WaveForm | number) => {
            setPanel((prevPanel) => ({
                ...prevPanel,
                [section]: {
                    ...prevPanel[section],
                    content: {
                        ...prevPanel[section].content,
                        [name]: { ...prevPanel[section].content[name], value },
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

            {Object.entries(panel).map(([key, section]) => (
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
