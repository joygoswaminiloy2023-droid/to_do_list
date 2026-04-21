import { Card, Link } from "@heroui/react";
import Image from "next/image";

const TaskCard = ({ t_data }) => {
  if (!t_data) return null;

  const {
    title,
    description,
    status,
    priority,
    image,
    dueDate,
    tags,
  } = t_data;

  return (
    <Card variant="primary" className="border-cyan-500 text-white p-4 rounded-xl">

      {/* IMAGE */}
      <div className="relative w-full h-40 mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* STATUS + PRIORITY */}
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span className="uppercase">{status}</span>
        <span className="text-cyan-400">{priority}</span>
      </div>

      {/* TITLE */}
      <Card.Title className="text-cyan-300">
        {title}
      </Card.Title>

      {/* DESCRIPTION */}
      <Card.Description className="text-gray-400 mt-1">
        {description}
      </Card.Description>

      {/* TAGS */}
      <div className="flex gap-2 flex-wrap mt-3">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
        <span>Due: {dueDate}</span>

        <Link href="#" className="text-cyan-400 hover:underline">
          View Task
        </Link>
      </div>

    </Card>
  );
};

export default TaskCard;