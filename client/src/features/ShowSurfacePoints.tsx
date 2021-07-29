import { SurfacePointRunType } from "../types";
import useSurfacePoints from "../app/hooks/useGempyData";

export default function ShowSurfacePoints(): JSX.Element {
  const { data, status } = useSurfacePoints();
  if (status === "error") return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!SurfacePointRunType.guard(data)) return <div>Wrong shape</div>;
  return (
    <ul>
      {data.map((p) => (
        <li key={p.idx}>{p.x_coord}</li>
      ))}
    </ul>
  );
}
