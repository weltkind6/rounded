import styles from './styles.module.css';

const ColoredUserpic = ({ img, size, margin, backgroundColor, colors, hoverColors, colorWidth }) => {
    const imgStyle = {
        '--size': `${size}px`,
        '--backgroundColor': `${margin}px solid ${backgroundColor}`,
        '--color1': colors[0],
        '--color2': colors[1],
        '--colorToHover1': hoverColors[0],
        '--colorToHover2': hoverColors[1],
        '--colorWidth': `${colorWidth}px solid transparent`
    };

    return (
        <div className={styles.wrapper}>
            <h1>ColoredUserpic</h1>
            <div className={styles.container} style={imgStyle}>
                <img
                    src={img}
                    alt='m-ali'
                    className={styles.img}
                    style={imgStyle}
                />
            </div>
        </div>
    );
};

export default ColoredUserpic;
