type TipData = {
    id: number;
    message: string;
}

const TIPS_DATA = [
    {
        id: 0,
        message: "Switch to Energy-Efficient Lighting – Replace incandescent bulbs with LED lights to use up to 80% less energy and lower electricity consumption."
    },
    {
        id: 1,
        message: "Reduce Meat Consumption – Eating more plant-based meals can significantly cut your carbon footprint, as meat production is a major contributor to greenhouse gas emissions."
    },
    {
        id: 2,
        message: "Unplug Devices When Not in Use – Many electronics consume energy even when turned off. Unplugging or using a power strip can help eliminate 'phantom' energy use."
    },
    {
        id: 3,
        message: "Choose Public Transport or Carpool – Opt for buses, trains, biking, or carpooling to reduce emissions from personal vehicles and lower your overall carbon impact."
    },
    {
        id: 4,
        message: "Support Sustainable Brands – Purchase from companies committed to eco-friendly practices, such as using recycled materials, ethical sourcing, and carbon-neutral shipping."
    }
]

export { TIPS_DATA }
export type { TipData }
