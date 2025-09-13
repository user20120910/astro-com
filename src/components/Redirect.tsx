import { useEffect } from 'react';

interface Props {
  url: string;
}

const Redirect: React.FC<Props> = ({ url }) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return null;
};

export default Redirect;
