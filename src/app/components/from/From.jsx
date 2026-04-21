import React from 'react';
import {Envelope, Plus} from "@gravity-ui/icons";
import {Button} from "@heroui/react";
import {Input, Label, Modal, Surface, TextField} from "@heroui/react";
const From = ({createAtask}) => {
    return (
      <Modal>
  <Button variant="secondary" className="bg-black border border-cyan-600">
        <Plus />
        Add Task
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-black text-white">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
            <Surface variant="default">
              <form action={createAtask} className="flex flex-col gap-4 bg-black">

                {/* Title */}
                <TextField name="title">
                  <Label>Task Title</Label>
                  <Input placeholder="Enter task title" />
                </TextField>

                {/* Description */}
                <TextField name="description">
                  <Label>Description</Label>
                  <Input placeholder="Enter task description" />
                </TextField>

                {/* Status */}
                <TextField name="status">
  <Label>Status</Label>

  <select
    name="status"
    className="w-full bg-white border-cyan-500 text-black p-2 rounded-xl"
  >
    <option value="Completed">Completed</option>
    <option value="Pending">Pending</option>

  </select>
</TextField>

                {/* Priority */}
            <TextField name="priority">
  <Label>Priority</Label>

  <select
    name="priority"
    className="w-full bg-white border-cyan-500 text-black p-2 rounded-xl"
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
</TextField>

                {/* Due Date */}
                <TextField name="dueDate">
                  <Label>Due Date</Label>
                  <Input type="date" />
                </TextField>

                {/* Image URL */}
                <TextField name="image">
                  <Label>Image URL</Label>
                  <Input placeholder="Enter image URL" />
                </TextField>

                {/* Tags */}
                <TextField name="tags">
                  <Label>Tags</Label>
                  <Input placeholder="backend, nodejs, api" />
                </TextField>

                  <Modal.Footer>
              <Button type='submit' variant="secondary">
                Cancel
              </Button>
              <Button type='submit' >Send Message</Button>
            </Modal.Footer>

              </form>
            </Surface>
          </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default From;