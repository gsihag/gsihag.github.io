
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MapPin, MessageSquare, Phone, Linkedin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactSection: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            Feel free to reach out for academic discussions or professional inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Research collaboration, inquiry, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-researcher-blue hover:bg-researcher-blue-dark"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          <div className="bg-gradient-to-br from-researcher-blue to-researcher-indigo text-white p-8 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="mt-1 opacity-90">gulshansihag01@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="mt-1 opacity-90">+33635567595</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Current Location</h4>
                    <p className="mt-1 opacity-90">
                      LAMIH, CNRS UMR 8201<br />
                      Université Polytechnique Hauts-de-France<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <p className="mt-1 opacity-90">/gulshansihag/</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Research Interests</h4>
                    <p className="mt-1 opacity-90">
                      AI in Healthcare • Bayesian Networks<br />
                      Health Data Analytics • Fall Risk Assessment<br />
                      Machine Learning for Medical Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Academic Collaboration</h4>
              <p className="text-sm opacity-90">
                I welcome opportunities for research collaboration, joint publications, 
                and academic partnerships in AI applications for healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
