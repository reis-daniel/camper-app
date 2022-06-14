import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Place() {
  const { placeId } = useParams();
  return (
    <div>
      <div>
        <div>
          Background Tester
          <Link to="/home">Back</Link>
        </div>
        <div>
          Content Tester
          <div>Commands</div>
          <div>{placeId} Description</div>
          <div>
            Available Types
            <div>Type</div>
            <div>Type</div>
          </div>
          <img src="" alt="" />
          <div>
            Extras
            <ul>
              <li>Extra 1</li>
              <li>Extra 2</li>
              <li>Extra 3</li>
              <li>Extra 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
