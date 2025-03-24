import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Ut excepteur esse Lorem aliquip occaecat fugiat occaecat in amet proident. Tempor sint exercitation ea labore. Aliqua labore duis voluptate reprehenderit ut ad irure consectetur cupidatat eu.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
