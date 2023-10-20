import { useState, useEffect } from 'react';
import { useFirestoreRead } from 'hooks/useFirestoreRead';
import styled from 'styled-components';

import { GroupUI, GroupUIProps } from 'components/common/GroupUI';

interface SearchGroupListProps {
	searchKeyword: string;
}

export const SearchGroupList: React.FC<SearchGroupListProps> = ({
	searchKeyword,
}) => {
	const [archiveGroupData, setArchiveGroupData] = useState<GroupUIProps[]>([]);

	const firestoreReader = useFirestoreRead('groups');

	useEffect(() => {
		const fetchFilteredGroups = async () => {
			const response = await firestoreReader.ReadField(
				'name',
				'==',
				searchKeyword
			);

			const groupdata: GroupUIProps[] = response.map((item) => ({
				groupId: item.id,
				groupTitle: item.data.name,
				groupTags: item.data.tags,
				groupMember: item.data.groupUsers,
				groupImageURL: item.data.groupImageURL,
			}));

			setArchiveGroupData(groupdata);
		};

		fetchFilteredGroups();
	}, []);

	return (
		<GroupItemContainer>
			{archiveGroupData.map((groupItem) => (
				<GroupUI
					groupId={groupItem.groupId}
					groupTitle={groupItem.groupTitle}
					groupTags={groupItem.groupTags}
					groupMember={groupItem.groupMember}
					groupImageURL={groupItem.groupImageURL}
				/>
			))}
		</GroupItemContainer>
	);
};

const GroupItemContainer = styled.div`
	width: 100%;
	margin: 30px auto;
`;
