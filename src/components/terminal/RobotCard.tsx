import { useState } from "react";
import { FaExternalLinkAlt, FaRobot, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { SingleRobotResponse } from "@/components/terminal/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import ROUTES from "@/lib/types/routes";
import { formatDate } from "@/lib/utils/formatDate";

import { DeleteRobotModal } from "../modals/DeleteRobotModal";
import { Tooltip } from "../ui/ToolTip";

interface RobotCardProps {
  robot: SingleRobotResponse;
  onDeleteRobot: (robotId: string) => Promise<void>;
}

export default function RobotCard({ robot, onDeleteRobot }: RobotCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <Card className="w-full bg-background border border-foreground transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to={ROUTES.TERMINAL.WITH_ID.buildPath({ id: robot.robot_id })}
            className="flex items-center gap-4 group flex-grow cursor-pointer"
          >
            <div className="p-2 bg-background rounded-lg group-hover:bg-background transition-colors">
              <FaRobot className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">
                {robot.name}
              </h3>
            </div>
          </Link>
          <Tooltip content="Delete robot">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDeleteModalOpen(true)}
              className="h-10 w-10 rounded-lg bg-background text-foreground hover:bg-background transition-colors"
            >
              <FaTrash className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>

        {robot.description && (
          <p className="mt-4 text-sm text-foreground">{robot.description}</p>
        )}

        <div className="mt-4 pt-4 border-t border-background">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-foreground">Listing</p>
              {robot.is_deleted ? (
                <p className="text-gray-500 italic">Listing deleted</p>
              ) : (
                <Tooltip
                  content="View listing associated with robot"
                  position="bottom"
                >
                  <Link
                    to={ROUTES.BOT.buildPath({
                      username: robot.username,
                      slug: robot.slug,
                    })}
                    className="text-foreground hover:text-foreground flex items-center gap-1 group transition-colors"
                  >
                    <span className="group-hover:underline">
                      {robot.username}/{robot.slug}
                    </span>
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </Link>
                </Tooltip>
              )}
            </div>
            <div>
              <p className="text-foreground">Registered</p>
              <p className="text-foreground">
                {formatDate(new Date(robot.created_at * 1000))}
              </p>
            </div>
            <div>
              <p className="text-foreground">Order ID</p>
              {robot.order_id ? (
                <Tooltip
                  content="View order associated with robot"
                  position="bottom"
                >
                  <Link
                    to={ROUTES.ORDERS.path}
                    className="text-foreground hover:text-foreground flex items-center gap-1 group transition-colors"
                  >
                    <span className="group-hover:underline">
                      {robot.order_id}
                    </span>
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </Link>
                </Tooltip>
              ) : (
                <p className="text-foreground">No associated order</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <DeleteRobotModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={onDeleteRobot}
        robot={robot}
      />
    </Card>
  );
}
