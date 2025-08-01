import { useCallback, useState, type MouseEventHandler } from 'react';
import { INIT_PANEL } from '../../config/manualPanelConfig.ts';
import useKeyPress from '../../hooks/useKeyPress.ts';
import { playChord, playNote } from '../../services/SynthPlayerService.ts';
import type { Panel, WaveForm } from '../../types/.index.ts';
import { Button } from '../Button/.index.ts';
import SynthParameterAdjuster from '../SynthParameterAdjuster/SynthParameterAdjuster.tsx';
import './SynthControls.scss';

function SynthControls() {
    const [panel, setPanel] = useState<Panel>(INIT_PANEL);

    const handleOnPlayNote: MouseEventHandler<HTMLButtonElement> = () => {
        playNote(panel);
    };

    const handleOnPlayChord: MouseEventHandler<HTMLButtonElement> = () => {
        playChord(panel);
    };

    useKeyPress('N', () => playNote(panel));

    useKeyPress('C', () => playChord(panel));

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

            <div className="row">
                <Button buttonType="Primary" onClick={handleOnPlayNote}>
                    Play Note (n)
                </Button>
                <Button buttonType="Secondary" onClick={handleOnPlayChord}>
                    Play Chord (c)
                </Button>
            </div>
        </div>
    );
}

export default SynthControls;
