import { useState } from 'react';

function ColorDisplay({ color }) {
    return (
        <div className='color-display'
            style={{
                backgroundColor: color,
                width: '200px',
                height: '100px',
                margin: '10px 0'
            }}>
            <p>Выбранный цвет: {color}</p>
        </div>
    );
}

function ColorControls({ color, onColorChange }) {
    const colors = ['#54332B', '#943636', '#b16a2f', '#CEA05A', '#5F5949'];

    return (
        <div className='color-controls'>
            <h3>Выберите цвет:</h3>
            <div className="color-buttons">
                {colors.map((col) => (
                    <button
                        key={col}
                        style={{ backgroundColor: col }}
                        onClick={() => onColorChange(col)}
                        className={color === col ? 'active' : ''}>
                        {col}
                    </button>
                ))}
            </div>
        </div>
    );
}

function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState('#54332B');

    return (
        <div className="color-picker">
            <h2>Выберите цвет</h2>
            <ColorDisplay color={selectedColor} />
            <ColorControls
                color={selectedColor}
                onColorChange={setSelectedColor}
            />
        </div>

    );
}
export default ColorPicker;