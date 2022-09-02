import Image from "next/image"

export const Review = ({ comment, author }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg border-neutral-100 dark:border-neutral-900 border">
      <p className="text-lg leading-relaxed">{comment}</p>
      <div className="mt-6 flex flex-row justify-between">
        <div className="text-sm font-bold">{author}</div>
        <div className="flex flex-row">
          <div className="mr-1"><Image alt={'Star'} src="/images/star.svg" width={16} height={16} /></div>
          <div className="mr-1"><Image alt={'Star'} src="/images/star.svg" width={16} height={16} /></div>
          <div className="mr-1"><Image alt={'Star'} src="/images/star.svg" width={16} height={16} /></div>
          <div className="mr-1"><Image alt={'Star'} src="/images/star.svg" width={16} height={16} /></div>
          <div className="mr-1"><Image alt={'Star'} src="/images/star.svg" width={16} height={16} /></div>
        </div>
      </div>
    </div>
  )
}