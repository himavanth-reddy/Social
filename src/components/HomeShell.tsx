import { useState } from "react";
import {
  AppShell,
  Burger,
  Input,
  CloseButton,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faXmark,
  faNewspaper,
  faUserGroup,
  faFingerprint,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import CreatePostModel from "./CreatePostModel";

export default function HomeShell() {
  const [value, setValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <span className="p-2 flex flex-row items-center justify-between">
          <span className="flex flex-row items-center gap-2">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div className="text-xl font-bold text-blue-600">Social</div>
            {isInputActive ? (
              <>
                <ActionIcon
                  variant="filled"
                  aria-label="search"
                  onClick={() => setIsInputActive(false)}
                  className="bg-blue-600"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </ActionIcon>
                <Input
                  className="w-1/2"
                  placeholder="Search"
                  value={value}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  rightSectionPointerEvents="all"
                  rightSection={
                    <CloseButton
                      aria-label="Clear input"
                      onClick={() => setValue("")}
                      style={{ display: value ? undefined : "none" }}
                    />
                  }
                />
              </>
            ) : (
              <ActionIcon
                variant="filled"
                aria-label="search"
                onClick={() => setIsInputActive(true)}
                className="mr-2"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </ActionIcon>
            )}
          </span>
          <span className="flex flex-row items-center gap-2">
            <CreatePostModel />
            <Avatar radius="xl" />
          </span>
        </span>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <span className="flex flex-col gap-7">
          <span className="flex flex-row items-center gap-3">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </span>
          <span className="flex flex-row items-center gap-3">
            <FontAwesomeIcon icon={faNewspaper} />
            <span>Feed</span>
          </span>
          <span className="flex flex-row items-center gap-3">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Friends</span>
          </span>
          <span className="flex flex-row items-center gap-3">
            <FontAwesomeIcon icon={faFingerprint} />
            <span>Security</span>
          </span>
          <span className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </span>
        </span>
      </AppShell.Navbar>
      <AppShell.Main className="flex-grow p-4">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
