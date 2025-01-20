"use client";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";


interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName
}) => {

    const params = useParams();
    const origin = useOrigin();

    const basrUrl = `${origin}/api/${params.storeId}`;

return (
    <>
    <ApiAlert
    title="GET"
    variant="public"
    description={`${basrUrl}/${entityName}`}
    />
    <ApiAlert
    title="GET"
    variant="public"
    description={`${basrUrl}/${entityName}/{${entityIdName}}`}
    />
    <ApiAlert
    title="POST"
    variant="admin"
    description={`${basrUrl}/${entityName}`}
    />
    <ApiAlert
    title="PATCH"
    variant="admin"
    description={`${basrUrl}/${entityName}/{${entityIdName}}`}
    />
    <ApiAlert
    title="DELETE"
    variant="admin"
    description={`${basrUrl}/${entityName}/{${entityIdName}}`}
    />
 
    </>
)
}