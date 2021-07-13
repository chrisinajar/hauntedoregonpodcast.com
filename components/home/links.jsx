import React from 'react';
import linkData from 'links';

import { Link } from './link';

export default function Links() {
  return linkData.map(renderLink);
}

function renderLink(data) {
  return (
    <Link href={data.href} target='_blank' alt={data.name} key={data.name}>
      {data.name}
    </Link>
  );
}
