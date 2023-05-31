import { fireEvent, render } from "@testing-library/react";
import TimelineItem from "./TimelineItem";
import { ComponentProps } from "react";
import { Timeline } from "flowbite-react";

describe("UI", () => {
  const mockProps: ComponentProps<typeof TimelineItem> = {
    title: "title",
    body: "body",
    link: "link",
    time: "time",
  };
  test("Component renders", () => {
    render(
      <Timeline>
        <TimelineItem {...mockProps} />
      </Timeline>
    );
  });

  test("Title renders", () => {
    const { getByText } = render(
      <Timeline>
        <TimelineItem {...mockProps} />
      </Timeline>
    );

    expect(getByText("title")).toHaveTextContent("title");
  });

  test("Body renders", () => {
    const { getByText } = render(
      <Timeline>
        <TimelineItem {...mockProps} />
      </Timeline>
    );

    expect(getByText("body")).toHaveTextContent("body");
  });

  test("Link renders", () => {
    const { getByRole } = render(
      <Timeline>
        <TimelineItem {...mockProps} />
      </Timeline>
    );
    expect(getByRole("link")).toHaveAttribute("href", "link");
  });
});

describe("Interactions", () => {
  test("User can click the link", () => {
    const { getByRole } = render(
      <Timeline>
        <TimelineItem title="title" body="body" link="/" time="time" />
      </Timeline>
    );
    fireEvent.click(getByRole("link", { name: "timeline_item_link" }));
  });
});
