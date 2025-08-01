import type { Parameter } from '../../types/.index';
import { isNumericParameter } from '../../types/interfaces/Parameters/NumericParameter';
import { isWaveParameter } from '../../types/interfaces/Parameters/WaveParameter';
import SynthParameterSelector from './SynthParameterSelector/SynthParameterSelector';
import SynthParameterSlider from './SynthParameterSlider/SynthParameterSlider';

type SynthControlsProps = {
    section: string;
    name: string;
    param: Parameter;
    handleSynthValueChange: Function;
};

function SynthParameterAdjuster({
    section,
    name,
    param,
    handleSynthValueChange,
}: SynthControlsProps) {
    if (isNumericParameter(param)) {
        return (
            <SynthParameterSlider
                section={section}
                name={name}
                param={param}
                handleSynthValueChange={handleSynthValueChange}
            />
        );
    } else if (isWaveParameter(param)) {
        return (
            <SynthParameterSelector
                section={section}
                name={name}
                param={param}
                handleSynthValueChange={handleSynthValueChange}
            />
        );
    } else {
        return <p>N/A</p>;
    }
}

export default SynthParameterAdjuster;
