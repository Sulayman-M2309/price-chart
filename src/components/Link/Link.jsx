

const Link = ({ e }) => {
  return (
    <li className="mr-7 hover:text-green-400">
      <a href={e.path}>{e.name}</a>
    </li>
  );
};

export default Link;
