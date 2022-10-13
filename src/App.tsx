
import { Bar, BarChart, CartesianGrid, LabelList, Legend, XAxis, YAxis } from 'recharts'
import './App.css'
const studentData = [
  {
    name: 'Stephen',
    submissions: {
      beavers: 3,
      stars: 2,
    }
  },
  {
    name: 'Eduardo',
    submissions: {
      beavers: 7,
      stars: 1,
    }
  },
  {
    name: 'Pepe',
    submissions: {
      beavers: 6,
      stars: 9,
    }
  },
  {
    name: 'Gigachad',
    submissions: {
      beavers: 0,
      stars: 10,
    }
  },
]

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  return (
    <>

      {/* //first we isntall the chart library using this comand in terminal npm install recharts
      //we choose what type of chart do we want, in this case we want barchart */}
      <BarChart
        //we can add a class name to style it, in this case we can style the background color to be white
        className='chart'
        //we can choose the width of the chart
        width={500}
        //we can choose the height of the chart
        height={300}
        //we can choose where do we get data to bild this chart in this case from the above array with name studentData
        data={studentData}
      >
        {/* The X axis of the chat and we can show name of student insetead of numbers by using dataKey="name" */}
        <XAxis dataKey="name" />
        {/* the Y axis of the chat */}
        <YAxis />
        {/* Legend of the chart, each color what does it present */}
        <Legend />
        {/* we use bar to build rectagles into with data that we want,
       in these case we get data from submissions.beavers and submissions.stars.
       Also we can add name that will be shown into the legend part to see what does each chart present */}
        <Bar dataKey="submissions.beavers" fill="#da9249" name="beavers" >
          {/* We can add extra information to each recatangle by use Labellist. 
        Into Lablelist we use datakey for data that we want to be shown
         and alos position where do we want to put them */}
          <LabelList dataKey="submissions.beavers" position="center" />
        </Bar>
        <Bar dataKey="submissions.stars" fill="#ffd700" name="stars" >
          <LabelList dataKey="submissions.stars" position="center" />
        </Bar>
      </BarChart>
      {/* Need to work on it more, not enought time */}
      <p>Add a new student</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        const newStudent = {
          name: e.target.name.value,
          submissions: {
            beavers: Number(e.target.beavers.value),
            stars: Number(e.target.stars.value),
          }
        }
        studentData.push(newStudent)
        console.log(studentData)
      }
      }>
        <input placeholder='Enter stundent name...' name="name" />
        <input placeholder='Enter stundent beavers...' name="beavers" />
        <input placeholder='Enter stundent stars...' name="stars" />
        <button>Submit data</button>
      </form>
    </>

  )

}

export default App
