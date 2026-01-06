import type { Resource } from "../types/Resource"
import { House, Clock4, SquareM, Phone } from 'lucide-react';

export const ResourceBlock = ({
	id,
	title,
	sub_category,
	address,
	hours,
	description,
	phone,
}: Resource ) => {
	return (
		<div key={id} className="group p-4 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-blue-300">
			<h3 className="font-bold text-lg text-guide-blue dark:text-blue-200 group-hover:text-guide-blue underline">{title}</h3>
			<p className="text-sm text-gray-500 mb-2">{sub_category}</p>
			
			<div className="flex items-center gap-2 text-gray-400 text-sm italic group-hover:text-gray-800">
				<House className='h-3 w-3 shrink-0' />
				<span>{address}</span>
			</div>

			<div className="flex items-center gap-2 text-gray-400 text-sm italic group-hover:text-gray-800">
				<SquareM className='h-3 w-3 shrink-0'/>
				{description && (
					<p className="text-sm text-gray-600 mb-2 italic">{description}</p>
				)}
			</div>

			{phone && (
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mt-2">
          <Phone className="h-4 w-4 shrink-0" />
          <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
        </div>
      )}
			
			<div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-400 group-hover:text-gray-800">
				<Clock4 className='h-3 w-3 shrink-0' />
				<span>{hours}</span>
			</div>

		</div>
	)
}