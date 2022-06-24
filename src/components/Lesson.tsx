import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class',
}

export const Lesson = (props: LessonProps)=>{

  const { slug } = useParams<{slug:string}>()

  const isLessonAvilable = isPast(props.availableAt)
  const avilableDateFormatted = format(props.availableAt, "EEEE ' • ' d ' de ' MMMM ' • 'k'h'mm",{
    locale: ptBR
  } )

  const isActiveLesson = slug == props.slug;
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {avilableDateFormatted}
        </span>
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${isActiveLesson ? 'bg-green-500': ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvilable? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20}/>
            Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20}/>
            Em Breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border font-bold">
            {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
            </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
     )
}