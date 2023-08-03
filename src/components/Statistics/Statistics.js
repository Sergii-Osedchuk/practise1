import s from './Statistics.module.css'

function Statistics({title, stats}) {
    const colorPicker = () => {
        let colors = ['red', 'green', 'blue', 'yellow','tomato', 'violet','navy', 'olive']
        let randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    return (
        <section className={s.statistics}>
            {title ? <h2 className={s.title}>{title}</h2> : null}

            <ul className={s.statlist}>
                {stats.map(stat => 
                <li key='id' className={s.item} style={{backgroundColor:colorPicker()}}>
                  <span className={s.label}>{stat.label}</span>
                  <span className={s.persentage}>{stat.percentage}%</span> 
                </li>
                )}
            </ul>
        </section>
    )
}

export default Statistics;